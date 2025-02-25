
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



(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
})()