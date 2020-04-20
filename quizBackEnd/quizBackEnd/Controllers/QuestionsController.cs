using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace quizBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {

            return context.Questions;
        }

        [HttpGet("{quizId}")]
        public IEnumerable<Models.Question> Get([FromRoute] int quizId)
        {

            return context.Questions.Where(q=>q.QuizId==quizId);
        }
    
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);
            if(quiz==null)
            {
                return NotFound();
            }
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            //var question = await context.Questions.SingleOrDefaultAsync(q=>q.ID==id);
            if (id != question.ID)
                return BadRequest();
            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question);
        }
    }
}