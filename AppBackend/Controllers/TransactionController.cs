using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        // GET: api/Transaction
        [HttpGet]
        public IEnumerable<TransactionViewModel> Get()
        {
            var list = TransactionData.transactions.OrderByDescending(x => x.CreatedDate);
            List<TransactionViewModel> result = new List<TransactionViewModel>();
            foreach (var tm in list)
            {
                var credit = list.Where(x => x.Id <= tm.Id && x.TransactionType == 1).Sum(x => x.Amount);
                var debit = list.Where(x => x.Id <= tm.Id && x.TransactionType == 2).Sum(x => x.Amount);
                TransactionViewModel bm = new TransactionViewModel()
                {
                    Id = tm.Id,
                    CreatedDate = tm.CreatedDate,
                    Debit = tm.TransactionType == 2 ? tm.Amount : 0,
                    Credit = tm.TransactionType == 1 ? tm.Amount : 0,
                    Balance = credit - debit
                };
                result.Add(bm);
            }
            return result;
        }

        // GET: api/Transaction/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Transaction
        [HttpPost]
        public int Post([FromBody] Transaction transaction)
        {
            if (ModelState.IsValid)
            {
                transaction.Id = TransactionData.transactions.Count + 1;
                transaction.CreatedDate = DateTime.UtcNow;
                TransactionData.transactions.Add(transaction);
                return 1;
            }
            return 0;
        }

        // PUT: api/Transaction/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
