using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tic_Tac_Toe_API.Migrations
{
    public partial class Aircraft : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Flights",
                table: "Flights");

            migrationBuilder.AlterColumn<int>(
                name: "Airplane_Registration_Code",
                table: "Flights",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "Flight_Number",
                table: "Flights",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "Company_Name",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Country_Name",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DepartureAirport",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DestinationAirport",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TimeOfArrival",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TimeOfDeparture",
                table: "Flights",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Flights",
                table: "Flights",
                column: "Flight_Number");

            migrationBuilder.CreateTable(
                name: "Aircrafts",
                columns: table => new
                {
                    Airplane_Registration_Code = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Aircraft_Type = table.Column<string>(type: "TEXT", nullable: false),
                    Number_of_Seats = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aircrafts", x => x.Airplane_Registration_Code);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aircrafts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Flights",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Flight_Number",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Company_Name",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "Country_Name",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "DepartureAirport",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "DestinationAirport",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "TimeOfArrival",
                table: "Flights");

            migrationBuilder.DropColumn(
                name: "TimeOfDeparture",
                table: "Flights");

            migrationBuilder.AlterColumn<int>(
                name: "Airplane_Registration_Code",
                table: "Flights",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Flights",
                table: "Flights",
                column: "Airplane_Registration_Code");
        }
    }
}
