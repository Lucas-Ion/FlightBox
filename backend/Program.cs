using Microsoft.EntityFrameworkCore;
using FlightBox.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Custom Services:

/*  
 *  These scope allows automatic mapping to Data Transfer Objects
 *  to their respective models.
*/
builder.Services.AddCors();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("https://localhost:7085", "http://localhost:5128")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});

/*  
 *  These scopes allow manipulation of the Game Repository used without
 *  needing to change the lower implementation of the code. This allows
 *  more flexibility and changeability in the API.
*/
builder.Services.AddScoped<FlightBoxContext, FlightBoxContext>();
builder.Services.AddScoped<IFlightBoxRepository, SQLiteFlightBoxRepository>();

/*  
 *  This configuration sets up the sqlite database connection with the project
*/
IConfiguration Configuration = builder.Configuration;
IWebHostEnvironment environment = builder.Environment;

builder.Services.AddDbContext<FlightBoxContext>(options =>
options.UseSqlite("Data Source =./db; Version=3; New=True"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("corsapp");

// Run Application
app.Run();
