import {AuthStateInterface} from "../types/authState.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state:{auth:AuthStateInterface}) => state.auth;

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state:AuthStateInterface) => state.isSubmitting
)
