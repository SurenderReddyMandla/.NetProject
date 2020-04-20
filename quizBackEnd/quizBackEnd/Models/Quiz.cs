using System;

namespace quizBackEnd.Models
{
    public class Quiz
    {
        public int ID { get; set; }
        public String Title { get; set; }

        public string OwnerId { get; set; }
    }
}
