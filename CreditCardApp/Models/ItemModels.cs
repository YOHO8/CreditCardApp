namespace CreditCardApp.Models
{
    public class CardInformation
    {
        public int Id { get; set; }
        public string? CardNumber { get; set; }
        public string? CVC { get; set; }
        public DateOnly ExpiryDate { get; set; }
        public string? CardHolderName { get; set; }
    }
}
