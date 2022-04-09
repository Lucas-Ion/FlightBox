using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Tic_Tac_Toe_API.Migrations
{
    public partial class adminsAndReports : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Airlines");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Customers",
                table: "Customers");

            migrationBuilder.RenameTable(
                name: "Customers",
                newName: "User");

            migrationBuilder.AlterColumn<string>(
                name: "creditCardNumber",
                table: "User",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "User",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "airlineCompanyName",
                table: "User",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "reportNumber",
                table: "User",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "ProfileID");

            migrationBuilder.CreateTable(
                name: "Reports",
                columns: table => new
                {
                    reportNumber = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AdminProfileID = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reports", x => x.reportNumber);
                    table.ForeignKey(
                        name: "FK_Reports_User_AdminProfileID",
                        column: x => x.AdminProfileID,
                        principalTable: "User",
                        principalColumn: "ProfileID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_reportNumber",
                table: "User",
                column: "reportNumber");

            migrationBuilder.CreateIndex(
                name: "IX_Reports_AdminProfileID",
                table: "Reports",
                column: "AdminProfileID");

            migrationBuilder.AddForeignKey(
                name: "FK_User_Reports_reportNumber",
                table: "User",
                column: "reportNumber",
                principalTable: "Reports",
                principalColumn: "reportNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_User_Reports_reportNumber",
                table: "User");

            migrationBuilder.DropTable(
                name: "Reports");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropIndex(
                name: "IX_User_reportNumber",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "User");

            migrationBuilder.DropColumn(
                name: "airlineCompanyName",
                table: "User");

            migrationBuilder.DropColumn(
                name: "reportNumber",
                table: "User");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Customers");

            migrationBuilder.AlterColumn<string>(
                name: "creditCardNumber",
                table: "Customers",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Customers",
                table: "Customers",
                column: "ProfileID");

            migrationBuilder.CreateTable(
                name: "Airlines",
                columns: table => new
                {
                    ProfileID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    airlineCompanyName = table.Column<string>(type: "TEXT", nullable: false),
                    email = table.Column<string>(type: "TEXT", nullable: false),
                    password = table.Column<string>(type: "TEXT", nullable: false),
                    username = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airlines", x => x.ProfileID);
                });
        }
    }
}
