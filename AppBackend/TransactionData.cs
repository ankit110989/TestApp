using AppBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppBackend
{
    public static class TransactionData
    {
        public static List<Transaction> transactions;

        static TransactionData()
        {
            transactions = new List<Transaction>();
        }
       
        

        
    }
}
