using Microsoft.AspNetCore.Mvc;
using CreditCardApp.Models;
using System.Xml.Linq;

namespace CreditCardApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<CardInformation> Cards = new[]
        {
            new CardInformation{Id=1, ExpiryDate = DateOnly.Parse(DateTime.Today.ToString()) , CVC = "123", CardNumber = "12344567890123456"},
        };
        [HttpGet("{CardId:int}")]
        public CardInformation[] Get(int cardId)
        {
            CardInformation[] card = Cards.Where(i => i.Id == cardId).ToArray();
            return card;
        }
        [HttpPost("{CardNumber:string}")]
        public void Store(CardInformation cardInformation)
        {
            
        }
    }
}