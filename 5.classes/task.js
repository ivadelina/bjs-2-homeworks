class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;    
        this.releaseDate = releaseDate;  
        this.pagesCount = pagesCount;  
        this.state = 100; 
        this.type = null; 
    };
    fix() {
        this.state = (this.state * 1.5); 
    };
    set state(state) {
        if(state < 0) {
            state = 0;
        } else if (state > 100) {
            state = 100; 
        } else {
            state;
        };
        this._state = state;
    };
    get state() {
        return this._state;
    };
};
class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);       
        this.type = 'magazine'; 
        this.state = 100;
    };
};
class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount); 
        this.type = 'book'; 
        this.author = author;
        this.state = 100;
    };
};
class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount); 
        this.type = 'novel'; 
        this.state = 100;
    };
};
class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount); 
        this.type = 'fantastic';
        this.state = 100;         
    };
};
class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount); 
        this.type = 'detective';     
        this.state = 100;    
    };
};
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    };
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        };
    };
    findBookBy(type, value) {
       let result = this.books.find((item) => item[type] == value);
       if(!result) {
           return null;
       };
       return result;
         
    }; 
    giveBookByName(bookName) {
        let takeBookIndex = this.books.find(item => item.name === bookName);
        if(takeBookIndex) {
            let bookId = this.books.indexOf(takeBookIndex);
            this.books.splice(bookId,1);
            return takeBookIndex;
        } else {
            return null;
        };
    };
};

class Student {
    constructor(name, gender, age) {
        this.name = name;  
        this.gender = gender;  
        this.age = age;  
        this.marks = {}
};
    
    addMark(mark, subject) {
        if(1 > mark > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5")
        } else if(this.marks[subject] === undefined) {
            this.marks[subject] = [mark]
        } else this.marks[subject].push(mark)
    };

    getAverageBySubject(subject) {
        if(this.marks[subject] === undefined) {
            console.log("Несуществующий предмет")
        } else {
        let sum = 0;
        for(let i in this.marks[subject]) {
          sum += this.marks[subject][i];
        };
        let avg = sum / this.marks[subject].length;
        return `Средний балл по предмету ${subject} ${avg}`;
        };
    };
    getAverage() {
        let arrOfmarks = Object.values(this.marks)
        let arrOfAvg = arrOfmarks.map(item => ((item.reduce((acc, cur) => acc + cur))/item.length))
        return `Средний балл по всем предметам ${(arrOfAvg.reduce((acc, cur) => acc + cur))/arrOfAvg.length}`;
    };
    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    };
        
};