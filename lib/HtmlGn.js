// HTML file Generator  for jumbotron

function HtmlGn(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Page</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="./dist/style.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>
  <body>

  <div class="jumbotron" style="background: blue" >
    <h1 class="text-center" >Company Employees</h1>
    </div>
    <div class='card-container'>
        ${Cards(data)}
    </div>
  </body>
  </html>
  `;
};

// switch finction for generating diferent cards depending on different employee type
function Cards(data) {
  return data
    .map(answers => {
      let position = answers.getRole();
      switch (position) {
        case "Manager":
          return ManagerCard(answers);
          break;
        case "Engineer":
          return EngineerCard(answers);
          break;
        case "Intern":
          return InternCard(answers);
          break;
      }
    })
    .join("\n");
}

// function for generating manager card
function ManagerCard(answers) {
  let mangerCard = `
    <div class="card-container row">
    <div class="card col-lg-4 col-sm-6 col-xs-12">
    <div class="card cardbody">
      <div class="card-header" style="background: green">
                   ${answers.name}<br>
                   <div class="fa fa-edit">${answers.getRole()}</div>
                  </div>
      <div class="card-body">
        <form role="form">			
          <div class="form-group">
              <label for="reserve-unique-id" id="reserve-unique-id">ID: ${answers.id
    }</label>
          </div>
          <div class="form-group">
            <label for="reserve-email" id="reserve-email">Email: ${answers.email
    }</label>
          </div>
          <div class="form-group">
              <label for="reserve-phone" id="reserve-office-number">Office Number: ${answers.officeNumber
    }</label>					
          </div>				
          </form>
      </div>
    </div>
  </div>
  </div>
  `;
  return mangerCard;
}

// function for generating engineer card
function EngineerCard(answers) {
  let engineerCard = `
        <div class="card-container row">
        <div class="card col-lg-4 col-sm-6 col-xs-12">
                    <div class="card cardbody">
                      <div class="card-header" style="background: orange">
                                   ${answers.name}<br>
                                  <div><i class="fa fa-book"></i> ${answers.getRole()}</div><i class="">
                                  </div>
                      <div class="card-body">
                        <form role="form">			
                          <div class="form-group">
                              <label for="reserve-unique-id" id="reserve-unique-id">ID:${answers.id
    } </label>
                          </div>
                          <div class="form-group">
                            <label for="reserve-email" id="reserve-email">Email: ${answers.email
    }</label>
                          </div>
                          <div class="form-group">
                              <label for="reserve-phone" id="github">Github: ${answers.github
    }</label>					
                          </div>				
                          </form>
                      </div>
                    </div>
                  </div>
                  </div>
    `;
  return engineerCard;
}

// function for generating intern card
function InternCard(answers) {
  let internCard = `
    <div class="card-container row">
    <div class="card col-lg-4 col-sm-6 col-xs-12>
        <div class="card cardbody">
          <div class="card-header" style="background: brown">
                 ${answers.name}<br>
                <div><i class="fa fa-coffee"></i> ${answers.getRole()}</div>
                </div>
          <div class="card-body">
          <form role="form">			
            <div class="form-group">
              <label for="reserve-unique-id" id="reserve-unique-id">ID:${answers.id
    } </label>
            </div>
            <div class="form-group">
            <label for="reserve-email" id="reserve-email">Email: ${answers.email
    }</label>
            </div>
            <div class="form-group">
              <label for="reserve-phone" id="school">School: ${answers.school}</label>					
            </div>				
            </form>
          </div>
        </div>
              </div>
              </div>
    `;
  return internCard;
}

module.exports = HtmlGn;
