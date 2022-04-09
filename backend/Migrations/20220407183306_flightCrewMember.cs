using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tic_Tac_Toe_API.Migrations
{
    public partial class flightCrewMember : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FlightCrewMembers",
                columns: table => new
                {
                    EmployeeID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Airplane_Registration_Code = table.Column<int>(type: "INTEGER", nullable: false),
                    role = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FlightCrewMembers", x => x.EmployeeID);
                    table.ForeignKey(
                        name: "FK_FlightCrewMembers_Aircrafts_Airplane_Registration_Code",
                        column: x => x.Airplane_Registration_Code,
                        principalTable: "Aircrafts",
                        principalColumn: "Airplane_Registration_Code",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FlightCrewMembers_Airplane_Registration_Code",
                table: "FlightCrewMembers",
                column: "Airplane_Registration_Code");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FlightCrewMembers");
        }
    }
}
