using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MvcMovie.Models;

namespace WebAppMovieTheatreAdmin.Data
{
    public class WebAppMovieTheatreAdminContext : DbContext
    {
        public WebAppMovieTheatreAdminContext (DbContextOptions<WebAppMovieTheatreAdminContext> options)
            : base(options)
        {
        }

        public DbSet<MvcMovie.Models.Movie> Movie { get; set; }
    }
}
