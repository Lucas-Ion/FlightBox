﻿// <auto-generated />
using System;
using FlightBox.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Tic_Tac_Toe_API.Migrations
{
    [DbContext(typeof(FlightBoxContext))]
    [Migration("20220411225335_updateFlight")]
    partial class updateFlight
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

            modelBuilder.Entity("FlightBox.Models.Country", b =>
                {
                    b.Property<string>("Country_Name")
                        .HasColumnType("TEXT");

                    b.Property<string>("Languages")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TouristAttractions")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Country_Name");

                    b.ToTable("Countries");
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

                    b.Property<double>("Price")
                        .HasColumnType("REAL");

                    b.Property<string>("TimeOfArrival")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TimeOfDeparture")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Flight_Number");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("FlightBox.Models.FlightCrewMember", b =>
                {
                    b.Property<int>("EmployeeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Airplane_Registration_Code")
                        .HasColumnType("INTEGER");

                    b.Property<string>("role")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("EmployeeID");

                    b.HasIndex("Airplane_Registration_Code");

                    b.ToTable("FlightCrewMembers");
                });

            modelBuilder.Entity("FlightBox.Models.Report", b =>
                {
                    b.Property<int>("reportNumber")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("AdminProfileID")
                        .HasColumnType("INTEGER");

                    b.HasKey("reportNumber");

                    b.HasIndex("AdminProfileID");

                    b.ToTable("Reports");
                });

            modelBuilder.Entity("FlightBox.Models.User", b =>
                {
                    b.Property<int>("ProfileID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("reportNumber")
                        .HasColumnType("INTEGER");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ProfileID");

                    b.HasIndex("reportNumber");

                    b.ToTable("User");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("FlightBox.Models.Admin", b =>
                {
                    b.HasBaseType("FlightBox.Models.User");

                    b.HasDiscriminator().HasValue("Admin");
                });

            modelBuilder.Entity("FlightBox.Models.Airline", b =>
                {
                    b.HasBaseType("FlightBox.Models.User");

                    b.Property<string>("airlineCompanyName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("Airline");
                });

            modelBuilder.Entity("FlightBox.Models.Customer", b =>
                {
                    b.HasBaseType("FlightBox.Models.User");

                    b.Property<string>("creditCardNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasDiscriminator().HasValue("Customer");
                });

            modelBuilder.Entity("FlightBox.Models.FlightCrewMember", b =>
                {
                    b.HasOne("FlightBox.Models.Aircraft", "Aircraft")
                        .WithMany()
                        .HasForeignKey("Airplane_Registration_Code")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aircraft");
                });

            modelBuilder.Entity("FlightBox.Models.Report", b =>
                {
                    b.HasOne("FlightBox.Models.Admin", null)
                        .WithMany("reports")
                        .HasForeignKey("AdminProfileID");
                });

            modelBuilder.Entity("FlightBox.Models.User", b =>
                {
                    b.HasOne("FlightBox.Models.Report", null)
                        .WithMany("users")
                        .HasForeignKey("reportNumber");
                });

            modelBuilder.Entity("FlightBox.Models.Report", b =>
                {
                    b.Navigation("users");
                });

            modelBuilder.Entity("FlightBox.Models.Admin", b =>
                {
                    b.Navigation("reports");
                });
#pragma warning restore 612, 618
        }
    }
}
