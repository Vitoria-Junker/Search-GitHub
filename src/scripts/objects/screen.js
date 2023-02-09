const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt="User profile picture"/>
                                <div class="data">
                                    <h1>${user.name ?? "User has no registered name 😥"}</h1>
                                    <p>${user.bio ?? "User does not have bio registered 😥"}</p>
                                    <div class="followers">
                                    <h2> 💜  ${user.followers ?? "Has no followers"} Followers</h2>
                                    <h2> 💜  ${user.following ?? "Does not follow"} Following</h2>
                                    </div>
                                </div>
                            </div>`
    
    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += 
        `<li>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div class="repositories-dates">
                                            <p>🍴  ${repo.forks}</p>
                                            <p>👀 ${repo.watchers}</p>
                                            <p>⭐ ${repo.stargazers_count}</p>
                                            <p>🖥️ ${repo.language}</p>
                                        </div>
        </li>`)

    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                         <h2>Repositories</h2>
                                         <ul>${repositoriesItens}</ul>
                                         </div>`

    }

    let eventsType = user.events.filter((event) => event.type === 'CreateEvent' || event.type === 'PushEvent')
    console.log(eventsType)
    let eventsItens = ""
    let eventsMessage = ""
    
                eventsType.forEach(event => {
                    if (event.type === 'PushEvent') {
                         eventsItens += 
                         `<li><p>${event.repo.name}</p>`
                         eventsMessage +=
                         `<p> / ${event.payload.commits[0].message}</p></li>`
                         return
                    }
                    console.log(eventsItens)
                })
        
                if(eventsType.length > 0 ){
                    this.userProfile.innerHTML += 
                `<h2>Events</h2>
                <div class="events">
                 <ul class="bold">${eventsItens}</ul>
                 <ul> ${eventsMessage}</ul>
                </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>usuário não encontrado</h3>"
    }
}

export { screen }
