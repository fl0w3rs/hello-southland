export interface MainStateInterface {
  prop: boolean;
}

function state(): MainStateInterface {
  return {
    prop: false,
  };
}

export default state;
