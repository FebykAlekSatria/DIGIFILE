export const baseURL = 'http://192.168.0.188:12345'

//login
export const login = baseURL + '/login'

//user
export const deleteFile = baseURL + '/user/delete_file/'
export const deleteFolder = baseURL + '/user/delete_folder/'
export const recoveryTrash = baseURL + '/user/recovery_trash'
export const renameFile = baseURL + '/user/rename_file/'
export const renameFolder = baseURL + '/user/rename_folder/'
export const deleteTrashFile = baseURL + '/user/delete_trash_file/'
export const deleteTrashFolder = baseURL + '/user/delete_trash_folder/'

export const fileList = baseURL + '/user/get_file_list'
export const folderList = baseURL + '/user/get_folder_list'
export const itemList = baseURL + '/user/get_all_item_list/'

export const trashFileList = baseURL + '/user/get_trash_file_list/'
export const trashFolderList = baseURL + '/user/get_trash_folder_list/'
export const trashAllList = baseURL + '/user/get_all_trash_list/'

export const informationStorage = baseURL + '/user/get_information_storage/'
export const searchFolderFile = baseURL + '/user/search_user/'
export const uploadFile = baseURL + '/user/upload_file'
export const uploadFolder = baseURL + '/user/upload_folder'
export const createFolder = baseURL + '/user/create_folder'
export const downloadFile = baseURL + '/user/download_file'
export const downloadFolder = baseURL + '/user/download_folder'

//owner
export const logActivity = baseURL + '/owner/get_log_activity?'
export const pageLogs = baseURL + '/owner/logs'
export const addUser = baseURL + '/owner/add_user?'
export const searchLashActivity = baseURL + '/owner/search?'
export const logUserActivity = baseURL + '/owner/get_user_log_activity?'
export const pageLogsUser = baseURL + '/owner/logsuser?'
export const infomationUser = baseURL + '/owner/get_user_information?'
export const editUser = baseURL + '/owner/edit_user?'