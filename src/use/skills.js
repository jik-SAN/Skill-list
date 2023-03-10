import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

axios.defaults.baseURL = "http://localhost:8000/api/v1/"

export function useSkills() {

	const skills = ref([])
	const skill = ref([])
	const errors = ref({})
	const router = useRouter()

	const getSkills = async () => {
	const res = await axios.get("skills")
	skills.value = res.data.data
	}
	const getSkill = async (id) => {
	const res = await axios.get("skills/" + id)
	skill.value = res.data.data
	}
	const storeSkill = async (data) => {
		try{
			await axios.post("skills", data)
			await router.push({name: "SkillIndex"})
		}
		catch(error) {
			if(error.response.status === 422) {
				errors.value = error.response.data.errors
			}
		}

	}
	const updateSkill = async (id) => {
		try{
			console.log(skill.value)
			await axios.put("skills/" + id, skill.value)
			await router.push({name: "SkillIndex"})
		}
		catch(error) {
			if(error.response.status === 422) {
				errors.value = error.response.data.errors
			}
		}

	}
	const destroySkill = async (id) => {
		if (!window.confirm('Are you sure?')) return
		await axios.delete("skills/" + id)
		await getSkills()
	}

	return {
		skill,
		skills,
		getSkills,
		getSkill,
		storeSkill,
		updateSkill,
		destroySkill,
		errors
	}
}