/*
Problem 2: 
            Geeta Singh is the book manager at Kiddeo who takes care of managing the books and lending
            them for the registered users.
            
            The registered users will be allowed to keep the book for 15 days from the date of issue
            (including date of issue) and then on they will be charged $1 as fine for every day.
            As the number of book readers increased dramatically during the lockdown, Geeta wants to 
            develop an application that will calculaate the fine to be paid by the user based on the
            return date. Help Geeta to develop the application.
            
            Input :
                    First line consists of an integer 'n' representing the number of books returned
                    followed by 'n' lines each with three space seprated values representing book 
                    name, issue date and return date in the forthcoming lines.
                    
                    Book name can have maximum 30 characters including space.
                    
                    Date will be in dd/mm/yyyy format.
            
            Output :
                    Display the book name, duedate and fine to be paid for every book with a single
                    space between them. If there is no fine, display 0.
            
            
            Example :
                    
                Input 
                        2
                        
                        Kill bill 11/02/2020 29/02/2020
                        Harry potter 15/02/2020 25/02/2020                 */

// Solution :- 

function calculate_fine(issueDate, returnDate){
    const oneDay = 24*60*60*1000;
    const issueDate = new Date(issueDate);
    const returnDate = new Date(returnDate);
    const days_differ = Math.floor((returnDateObj - issueDateObj)/ oneDay);

    if (days_differ > 15){
        const daysLate = days_differ - 15;
        return daysLate;
    }
    return 0;
}

function calculate_fines(input) {
    const n = input[0];
    const books = input.slice(1);
    const fines = books.map(book => {
        const [bookName, issueDate, returnDate] = book.split(' ');
        const fine = calculate_fine(issueDate, returnDate);
        return '${bookName} ${issueDate} ${fine}';
    });
    fines.foreach(result => console.log(result));
}

const input = [2,
              'Kill bill 11/02/2020 29/02/2020',
              'Harry potter 15/02/2020 25/02/2020'];
calculate_fines(input);