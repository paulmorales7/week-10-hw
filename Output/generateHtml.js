function generateHtml(data) {
    return (`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="/app.js"></script>
        <title>Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
    
                    <div class="card manager-card">
                        <div class="card-header">
                            <h2 class="card-title">${data.name}</h2>
                            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: {{ data.id }}</li>
                                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                                <li class="list-group-item">Office number: ${data.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="card intern-card">
                        <div class="card-header">
                            <h2 class="card-title">${data.name}</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                                <li class="list-group-item">School: ${data.school}</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="card engineer-card">
                        <div class="card-header">
                            <h2 class="card-title">${data.name}</h2>
                            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${data.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}"
                                        target="_blank" rel="noopener noreferrer">${data.github}</a></li>
                            </ul>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
    
    </body>
    
    </html>`);
}

module.exports = generateHtml;