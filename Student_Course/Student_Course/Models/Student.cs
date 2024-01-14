using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Student_Course.Models
{
    public class Student
    {
        [Key]
        public int id { get; set; }
        public string studentname { get; set; }
        public string course { get; set; }
    }
}
      