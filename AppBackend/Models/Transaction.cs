using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppBackend.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int TransactionType { get; set; }

        public DateTime CreatedDate { get; set; }
    }

    public class TransactionViewModel: Transaction
    {
        public decimal Debit { get; set; }
        public decimal Credit { get; set; }
     public decimal Balance { get; set; }
    }
}
