import axios from '@/utils/axios'


export function test(query){
	return axios({
		url: '/schedule_base_info/get_all_startport',
	    method: 'get',
	    ...query
	})	
}
