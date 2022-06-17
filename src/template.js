let generatehtmlPage = teamObj => {
    console.log('team object', teamObj)
    
    let htmlCard = ""

    for (let i = 0; i < teamObj.length; i++) {
        let finalP = teamObj[i].office || teamObj[i].gitHub || teamObj[i].school;
        let keys = Object.keys(teamObj[i]);
        let lastKey = keys[4];
        let finalOp = lastKey + ":" + finalP

        if (lastKey === undefined) {
            finalOp = "";

        } else if (lastKey === 'gitHub') {
            finalOp = (`GitHub : <a href = 'https://www.github.com/${teamObj[i].gitHub}'> ${teamObj[i].gitHub}</a>`)
            console.log(finalOp)
        }
        else {
            console.log(finalOp)
        }


        //htmll card
        let { name, role, email, id } = teamObj[i]
        htmlCard += `
         <div class="card col" style="width: 18rem;">
         <div class="card-body card-header">
             <h5 class="card-title">${name}</h5>
             <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
         </div>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
             <li class="list-group-item">Employee ID: ${id}</li>
             <li class="list-group-item"> ${finalOp}</li>
             
             
         </ul>
         </div>`

    }

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        
    
    </head>
    
    <body>
        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
    
             ${htmlCard}
    
                
            </div>
    
        </main>
    
    </body>
    
    </html>`

}
module.exports = generatehtmlPage;

