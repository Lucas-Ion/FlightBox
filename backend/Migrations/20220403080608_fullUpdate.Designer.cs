﻿// <auto-generated />
using FlightBox.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Tic_Tac_Toe_API.Migrations
{
    [DbContext(typeof(FlightBoxContext))]
    [Migration("20220403080608_fullUpdate")]
    partial class fullUpdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("FlightBox.Models.Aircraft", b =>
                {
                    b.Property<int>("Airplane_Registration_Code")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Aircraft_Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Number_of_Seats")
                        .HasColumnType("INTEGER");

                    b.HasKey("Airplane_Registration_Code");

                    b.ToTable("Aircrafts");
                });

            modelBuilder.Entity("FlightBox.Models.Airline", b =>
                {
                    b.Property<int>("ProfileID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("airlineCompanyName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ProfileID");

                    b.ToTable("Airlines");
                });

            modelBuilder.Entity("FlightBox.Models.Baggage", b =>
                {
                    b.Property<int>("Baggage_Tracking_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ProfileID")
                        .HasColumnType("INTEGER");

                    b.Property<double>("weight")
                        .HasColumnType("REAL");

                    b.HasKey("Baggage_Tracking_ID");

                    b.ToTable("Baggage");
                });

            modelBuilder.Entity("FlightBox.Models.Booking", b =>
                {
                    b.Property<int>("Seat_Number")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Flight_Number")
                        .HasColumnType("REAL");

                    b.Property<int>("ProfileID")
                        .HasColumnType("INTEGER");

                    b.HasKey("Seat_Number");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("FlightBox.Models.Customer", b =>
                {
                    b.Property<int>("ProfileID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("creditCardNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ProfileID");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("FlightBox.Models.Flight", b =>
                {
                    b.Property<int>("Flight_Number")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Airplane_Registration_Code")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Company_Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Country_Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DepartureAirport")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DestinationAirport")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TimeOfArrival")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TimeOfDeparture")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Flight_Number");

                    b.ToTable("Flights");
                });
#pragma warning restore 612, 618
        }
    }
}
