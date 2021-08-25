using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MvcMovie.Models;
using System;
using System.Linq;
using WebAppMovieTheatreAdmin.Data;

namespace WebAppMovieTheatreAdmin.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new WebAppMovieTheatreAdminContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<WebAppMovieTheatreAdminContext>>()))
            {
                // Look for any movies.
                if (context.Movie.Any())
                {
                    return;   // DB has been seeded
                }

                context.Movie.AddRange(
                    new Movie
                    {
                        Name = "When Harry Met Sally",
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        Director = "Romantic Comedy",
                        ContactEmail ="abc@gmail.com" ,
                        Language = Movie.LanguageEnum.Chinese,
                        Category= new WebAppMovieTheatreAdmin.Models.Category { Name="Comedy",Code=213}

                    }, new Movie
                    {
                        Name = "When He Met Sally",
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        Director = "Romantic Comedy",
                        ContactEmail = "abc@gmail.com",
                        Language = Movie.LanguageEnum.Chinese,
                        Category = new WebAppMovieTheatreAdmin.Models.Category {  Name = "Action", Code = 214 }

                    }, 
                    new Movie
                    {
                        Name = "When Jane Met Sally",
                        ReleaseDate = DateTime.Parse("1989-2-12"),
                        Director = "Romantic Comedy",
                        ContactEmail = "abc@gmail.com",
                        Language = Movie.LanguageEnum.Chinese,
                        Category = new WebAppMovieTheatreAdmin.Models.Category { Name = "Thriller", Code = 215 }

                    },

                     new Movie
                     {
                         Name = "When Justin Met Sally",
                         ReleaseDate = DateTime.Parse("1989-2-12"),
                         Director = "Romantic Comedy",
                         ContactEmail = "abc@gmail.com",
                         Language = Movie.LanguageEnum.Chinese,
                         Category = new WebAppMovieTheatreAdmin.Models.Category { Name = "Comedy", Code = 213 }

                     }
                );
                context.SaveChanges();
            }
        }
    }
}