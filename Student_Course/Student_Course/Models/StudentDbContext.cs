using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Proxies;
using Student_Course.Models;

namespace Student_Course.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
 

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=localhost; database=Student_Course; user=root; password=;", ServerVersion.AutoDetect("server=localhost; database=Studen_Course; user=root; password=;"));

                optionsBuilder.UseLazyLoadingProxies(); 
            }
        }
    }
}
