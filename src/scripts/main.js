
function updateProfileInfo (profileData){
    const photo = document.getElementById('profile-photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile-name')
    name.innerText = profileData.name

    const job = document.getElementById('profile-job')
    job.innerText = profileData.job

    const phone = document.getElementById('profile-phone')
    phone.innerText = profileData.phone
    phone.href = `https://wa.me/${profileData.phone}`

    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateHardSkills (profileData) {
    const hardSkillsList = document.querySelector('.hard-skills-list')

    hardSkillsList.innerHTML = ''
    
    profileData.skills.hardSkills.forEach(skill => {
        const li = document.createElement('li')
        li.classList.add('hard-skills-item')

        const img = document.createElement('img')
        img.src = skill.logo
        img.alt = skill.name
        img.title = skill.name
        li.appendChild(img)
        hardSkillsList.appendChild(li)
    })
}

function updateSoftSkills(profileData) {
    const softSkillsList = document.querySelector('.soft-skills-list')

    softSkillsList.innerHTML = ''

    profileData.skills.softSkills.forEach(skill => {
        const li = document.createElement('li') 
        li.textContent = skill 
        li.classList.add('soft-skills-item')
        softSkillsList.appendChild(li) 
    })
}

function updateLanguages (profileData) {
     const languages = document.querySelector('#profile-languages')

     languages.innerHTML = ''

     profileData.languages.forEach(language => {
        const li = document.createElement('li')
        li.textContent = language
        li.classList.add('languages-item')
        languages.appendChild(li)
     })
}

function updateFormation (profileData) {
    const formation = document.getElementById('profile-formation')
    formation.innerHTML = profileData.formation.map(formation => `
        <li>
            <h3> ${formation.name} <span>(${formation.degree})</span></h3>
            <p>${formation.school}</p>
            <p>${formation.period}</p>
        </li>
        `

    )
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateFormation(profileData)
})()