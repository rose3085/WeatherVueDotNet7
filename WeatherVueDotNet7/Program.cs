using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Cors;
using WeatherVueDotNet7.Data;
using WeatherVueDotNet7.Model;
using WeatherVueDotNet7.Services.AuthServices;
using WeatherVueDotNet7.Services.ForecastServices;
using WeatherVueDotNet7.Services.LocationServices;
using WeatherVueDotNet7.Services.AirQualityServices;
using WeatherVueDotNet7.Services.FiveDayForecast;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Authentication.Facebook;




var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IAuthServices, AuthServices>();
builder.Services.AddScoped<IForecastServices, ForecastServices>();
builder.Services.AddScoped<ILocationServices, LocationServices>();
builder.Services.AddScoped<IFiveDayForecast, FiveDayForecast>();
builder.Services.AddScoped<IAirQualityServices, AirQualityServices>();

builder.Services.AddDbContext<DataContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseSqlServer(connectionString);
});

// Add Identity
builder.Services
    .AddIdentity<ApplicationUser, IdentityRole>(options =>
    {
        options.User.RequireUniqueEmail = true;
       
    }

    )
    .AddEntityFrameworkStores<DataContext>()
    .AddDefaultTokenProviders();


// Config Identity
builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequiredLength = 6;
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.SignIn.RequireConfirmedEmail = false;
});


// Add Authentication and JwtBearer
builder.Services
    .AddAuthentication(options =>
    {
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
            ValidAudience = builder.Configuration["JWT:ValidAudience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
        };

    })
       .AddCookie()
    .AddFacebook(options =>
    {
        //options.AppId = builder.Configuration["Authentication:Facebook:AppId"];
        //options.AppSecret = builder.Configuration["Authentication:Facebook:AppSecret"];
        options.AppId = "1118287442581276";
        options.AppSecret = "c493827f3e552148409a2665dd66a6e8";
    });
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//app.UseSpa(spa =>
//{
//    // Specify the path to the React app
//    spa.Options.SourcePath = "WeatherVueFrontend/reactjsapp"; // Update this path based on your project structure

//    // If the environment is Development, use the React development server
//    if (app.Environment.IsDevelopment())
//    {
//        spa.UseReactDevelopmentServer(npmScript: "start");
//    }
//});



//app.UseCors(builder =>
//{

//    builder.AllowAnyOrigin()
//            .AllowAnyMethod()
//            .AllowAnyHeader()
//            ;
//});
app.UseCors("AllowAllOrigins");

app.UseAuthentication();

app.UseAuthorization();




app.MapControllers();

app.Run();
