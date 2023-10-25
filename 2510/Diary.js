function Record(date, recording) 
{
    this.date = date;
    this.recording = recording;
}

Record.prototype.showDiary = function () 
{
    console.log(`Дата: ${this.date}`);
    console.log(`Запись: ${this.recording}`);
};

Record.prototype.toString = function () 
{
    return `${this.date}: ${this.recording}`;
};

function Diary() 
{
    this.diary = [];
}

Diary.prototype.showDiary = function () 
{
    this.diary.forEach(function (record) 
    {
        record.showDiary();
    });
};

Diary.prototype.addRecord = function (date, recording) 
{
    const newRecord = new Record(date, recording);
    this.diary.push(newRecord);
};

const myDiary = new Diary();

myDiary.addRecord("2023-10-25", "Поход в музей");
myDiary.addRecord("2023-10-26", "Встреча с друзьями");

console.log("Весь дневник:");
myDiary.showDiary();