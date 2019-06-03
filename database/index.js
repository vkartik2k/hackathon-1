const Sequelize = require("sequelize")

const upskill = new Sequelize('upskill','root','',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min:0,
        max:5
    }
})

const learners = upskill.define('Learners', {
    LID : {
        type: Sequelize.INTEGER,
        primaryKey : true
    },
    name : {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.STRING
    },
    contact : {
        type: Sequelize.STRING
    },
    program : {
        type: Sequelize.STRING
    },
    course : {
        type: Sequelize.STRING
    },
    semester : {
        type: Sequelize.STRING
    },
    batch : {
        type : Sequelize.STRING
    }
})

const trainers = upskill.define('Trainers', {
    TID: {
        type: Sequelize.INTEGER,
        primaryKey : true
    },
    name : {
        type: Sequelize.STRING
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type: Sequelize.STRING
    },
    contact : {
        type: Sequelize.STRING
    },
    post : {
        type: Sequelize.STRING
    },
    course_code: {
        type: Sequelize.STRING
    },
    payscale : {
        type: Sequelize.STRING
    }
})

const assignment = upskill.define('Assignment', {
    AID: {
        type: Sequelize.INTEGER,
        primaryKey : true
    },
    batch : {
        type: Sequelize.STRING
    },
    subject_code : {
        type: Sequelize.STRING
    },
    TID : {
        type: Sequelize.INTEGER
    },
    link : {
        type: Sequelize.STRING
    }
})
const score = upskill.define('Score', {
    LID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    midsem_score : {
        type: Sequelize.INTEGER
    },
    internal_score : {
        type: Sequelize.INTEGER
    },
    endsem_score : {
        type: Sequelize.INTEGER
    },
    total_score : {
        type: Sequelize.INTEGER
    }
})
const feedback = upskill.define('Feedback', {
    FID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    LID: {
        type: Sequelize.INTEGER
    },
    TID: {
        type: Sequelize.INTEGER
    },
    completion : {
        type: Sequelize.STRING
    },
    interaction : {
        type: Sequelize.STRING
    },
    pace : {
        type: Sequelize.STRING
    },
    doubt : {
        type: Sequelize.STRING
    },
    overall : {
        type: Sequelize.STRING
    }
})
const notice = upskill.define('Notice', {
    NID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    program : {
        type: Sequelize.STRING
    },
    subject : {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    link : {
        type: Sequelize.STRING
    }
})
const timetable = upskill.define('Timetable', {
    batch: {
        type: Sequelize.STRING
    },
    link : {
        type: Sequelize.STRING
    }
})

upskill.sync()
    .then(() => console.log("DATABASE HAS BE SYNCED"))
    .catch((err) => console.error("PROBLEM IN SYNCING DATABASE"))

exports = module.exports = { learners, trainers,assignment, score, feedback,timetable, notice}