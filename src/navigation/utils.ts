/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

/**
 * @description: 路由跳转
 * @param {any} name
 * @param {any} params
 * @return {*}
 */
export const navigate = (name: any, params?: any) => {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params)
  }
}

/**
 * @description: 重置路由
 * @param {*} routes
 * @param {*} index
 * @return {*}
 */
export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    )
  }
}

/**
 * @description: 简单重置路由
 * @param {string} name
 * @param {*} index
 * @return {*}
 */
export const navigateAndSimpleReset = (name: string, index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    )
  }
}
