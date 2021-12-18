export interface MainStateInterface {
  auth: Record<string, any>;
  applyInfo: Record<string, any>;
}

function state(): MainStateInterface {
  return {
    auth: {},
    applyInfo: {},
  };
}

export default state;
