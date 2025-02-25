
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
})()