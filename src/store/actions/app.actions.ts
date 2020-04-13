import * as types from './action-types'
import { IUserType, IOriginalPermissions, IHistoryItem } from '@/types/store'

export type IAction =
  | UpdateRoute
  | ClearRoute
  | SetUserAndState
  | SetUserPermissions
  | LoginOut
  | ChangeReuseTab

export interface UpdateRoute {
  type: types.UPDATE_ROUTE
  payload: string
}
export function updateRoute(pathname: string): UpdateRoute {
  return {
    type: types.UPDATE_ROUTE,
    payload: pathname,
  }
}

export interface ClearRoute {
  type: types.CLEAR_ROUTE
}
export function clearRoute(): ClearRoute {
  return {
    type: types.CLEAR_ROUTE,
  }
}

export interface SetUserAndState {
  type: types.SET_USER_AND_STATE
  payload: IUserType
}
export function setUserAndState(user: IUserType): SetUserAndState {
  return {
    type: types.SET_USER_AND_STATE,
    payload: user,
  }
}

export interface SetUserPermissions {
  type: types.SET_USER_PERMISSIONS
  payload: IOriginalPermissions[]
}
export function setUserPermissions(
  permissions: IOriginalPermissions[],
): SetUserPermissions {
  return {
    type: types.SET_USER_PERMISSIONS,
    payload: permissions,
  }
}

export interface LoginOut {
  type: types.REMOVE_LOGINED
}
export function loginOut(): LoginOut {
  return {
    type: types.REMOVE_LOGINED,
  }
}

export interface ChangeReuseTab {
  type: types.CHANGE_REUSE_TAB
  payload: IHistoryItem[]
}
export function changeReuseTab(histories: IHistoryItem[]): ChangeReuseTab {
  return {
    type: types.CHANGE_REUSE_TAB,
    payload: histories,
  }
}
