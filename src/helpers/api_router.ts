//
const base = process.env.BASE_URL;

export const baseApiTechcellxpress = base;

export const admin = {
  getClient: `${base}/api/admin/get_client`,
  loadProducts: `${base}/admin/load_products`,
  removeAll: `${base}/admin/removeAll`,
}

export const bill = {
  get: `${base}/api/bill?id={id}`,
}

export const session = {
  logIn: `${base}/api/login`,
  logOut: `${base}/api/logout`,
}