using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace quizBackEnd.Models
{
    public class Question
    {
        public int ID { get; set; }
        public String Text { get; set; }
        public String correctAnswer { get; set; }
        public String Answer1 { get; set; }
        public String Answer2 { get; set; }
        public String Answer3 { get; set; }
        public int QuizId { get; set; }
    }
}
