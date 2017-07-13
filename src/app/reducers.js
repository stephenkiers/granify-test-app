import {combineReducers} from 'redux-immutable'

import albums, * as fromAlbums from './albums/albums_reducers'
import app_notification_messages, * as fromAppNotificationMessages from './app_notification_messages/app_notification_messages_reducers'
import app_state, * as fromAppState from './app_state/app_state_reducers'
import collections, * as fromCollections from './collections/collections_reducers'
import current_user, * as fromCurrentUser from './current_user/current_user_reducers'
import cities, * as fromCities from './Cities/cities_reducers'
import likes, * as fromLikes from './likes/likes_reducers'
import lookups, * as fromLookups from './lookups/lookup_reducers'
import messages, * as fromMessages from './Messages/messages_reducers'
import photos, * as fromPhotos from './Photos/photos_reducers'
import users, * as fromUsers from './Users/users_reducers'
import vendors, * as fromVendors from './Vendors/vendors_reducers'
import vendor_registration, * as fromVendorRegistration from './VendorRegistration/vendor_registration_reducers'
import weddings, * as fromWeddings from './Weddings/weddings_reducers'

const rootReducer = combineReducers({
    albums,
    app_notification_messages,
    app_state,
    collections,
    current_user,
    cities,
    likes,
    lookups,
    messages,
    photos,
    users,
    vendor_registration,
    vendors,
    weddings,
});


export default rootReducer

export const getAccountById = (state, id) =>
    id[0] === 'u' ? getUser(state, id) : getVendor(state, id)

export const getMessagesFormErrors = (state) =>
    fromAppNotificationMessages.getMessagesFormErrors(state.get('app_notification_messages'))
export const getMessagesFormSuccess = (state) =>
    fromAppNotificationMessages.getMessagesFormSuccess(state.get('app_notification_messages'))
export const getMessagesSiteWideErrors = (state) =>
    fromAppNotificationMessages.getMessagesSiteWideErrors(state.get('app_notification_messages'))

export const getAppServerResponseCode = state =>
    fromAppState.getAppServerResponseCode(state.get('app_state'))
export const getAppCurrentCitySlug = state =>
    fromAppState.getAppCurrentCitySlug(state.get('app_state'))

export const getAppStateMessageRecipientId = state =>
    fromAppState.getAppStateMessageRecipientId(state.get('app_state'))
export const getAppStateInspirationBookPhotoId = state =>
    fromAppState.getAppStateInspirationBookPhotoId(state.get('app_state'))

export const getCurrentAccount = (state) =>
    fromCurrentUser.getCurrentAccount(state.get('current_user'), state, getVendor, getUser)

export const getAlbum = (state, id) =>
    fromAlbums.getAlbum(state.get('albums'), id, state, getAccountById, getPhotosFromCollection)
export const getAlbumsServerState = (state) =>
    fromAlbums.getAlbumsServerState(state.get('albums'))

export const getAlbumIdsByOwnerId = (state, album_type, published, owner_id) =>
    fromAlbums.getAlbumIdsByOwnerId(state.get('albums'), album_type, published, owner_id)

export const getCollection = (state, id) =>
    fromCollections.getCollection(state.get('collections'), id)
export const getPhotosFromCollection = (state, id) =>
    fromCollections.getPhotosFromCollection(state.get('collections'), id, state, getPhoto)

export const getCitiesServerState = state =>
    fromCities.getCitiesServerState(state.get('cities'))
export const getCity = (state, id) =>
    fromCities.getCity(state.get('cities'), id)
export const getCityBySlug = (state, slug) =>
    fromCities.getCityBySlug(state.get('cities'), slug)
export const getAllCities = state =>
    fromCities.getAllCities(state.get('cities'))

export const getLikesCount = (state, item_id) =>
    fromLikes.getLikesCount(state.get('likes'), item_id)

export const getLookupVendorCategories = (state) =>
    fromLookups.getLookupVendorCategories(state.get('lookups'))
export const getLookupVendorTopCategories = (state, filter_categories) =>
    fromLookups.getLookupVendorTopCategories(state.get('lookups'), filter_categories)

export const getMessagesSendingState = (state) =>
    fromMessages.getMessagesSendingState(state.get('messages'));

export const getPhoto = (state, id) =>
    fromPhotos.getPhoto(state.get('photos'), id)
// export const getPhotos = (state, array_of_ids) =>
//     fromPhotos.getPhotos(state.get('photos'), array_of_ids)

export const getUser = (state, id) =>
    fromUsers.getUser(state.get('users'), id)

export const getVendor = (state, id) =>
    fromVendors.getVendor(state.get('vendors'), id, state, getCity)

export const getVendorRegistration = (state) =>
    fromVendorRegistration.getVendorRegistration(state.get('vendor_registration'))

// export const getWeddingsServerState = state =>
//     fromWeddings.getWeddingsServerState(state.weddings)
export const getWeddingByUser = (state, user_id) =>
    fromWeddings.getWeddingByUser(state.get('weddings'), user_id, state, getUser);
export const getWeddings = (state, ids_array) =>
    fromWeddings.getWeddings(state.get('weddings'), ids_array, state, getUser)

