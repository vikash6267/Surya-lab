
// Display Money in Indian Format
export const displayMoney = (n) => {
    if (n === null || n === undefined) {
        return 0; // or return a default value
      }
    const numFormat = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return numFormat.format(n).split('.', 1);
};


// Calculate Discount Percentage
export const calculateDiscount = (originalPrice, fakePrice) => {
    // Ensure both prices are valid numbers
    if (typeof originalPrice !== 'number' || typeof fakePrice !== 'number') {
      throw new Error('Both originalPrice and fakePrice must be numbers');
    }
  
    // Calculate the discount percentage
    const discount = ((originalPrice - fakePrice) / originalPrice) * 100;
  
    // Round off the discount to two decimal places
    const discountPercentage = Math.round(discount * 100) / 100;
  
    return discountPercentage;
  };
  


// Calculate Total Amount
export const calculateTotal = (arr) => {
    const total = arr.reduce((accum, val) => accum + val, 0);

    return total;
};