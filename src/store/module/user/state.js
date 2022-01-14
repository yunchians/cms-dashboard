import { getGoogleInfo, getToken } from '@/plugins/auth'

export default {
  token: getToken(),
  name: '',
  avatar: '',
  googleLoginInfo: getGoogleInfo()
}
