using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WeatherVueDotNet7.Migrations
{
    /// <inheritdoc />
    public partial class ThirdMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Locations_AspNetUsers_ApplicationUserId",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_ApplicationUserId",
                table: "Locations");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Locations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Locations",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ApplicationUserId",
                table: "Locations",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_AspNetUsers_ApplicationUserId",
                table: "Locations",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
