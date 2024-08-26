using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace Application.Common.Validation
{
    public class ListLengthAttribute : ValidationAttribute
    {
        private readonly int _length;

        public ListLengthAttribute(int length)
        {
            _length = length;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var list = value as IList;

            if (list != null && list.Count == _length)
            {
                return ValidationResult.Success;
            }

            return new ValidationResult($"The list must contain exactly {_length} items.");
        }
    }

}
