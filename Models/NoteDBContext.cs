using Microsoft.EntityFrameworkCore;

namespace SWDemo.Models
{
    public class NoteDBContext : DbContext
    {
        public NoteDBContext(DbContextOptions<NoteDBContext> options)
            : base(options)
        { }

        public DbSet<NoteData> NoteDatas { get; set; }
        public DbSet<Article> Articles { get; set; }

    }
}