import Cookies from "universal-cookie";

const cookies = new Cookies();

class CookiesService {
  // Get
  get(name: string): string {
    return cookies.get(name);
  }
  // Set
  set(name: string, value: object | string, options?: object): void {
    return cookies.set(name, value, options);
  }
  // Remove
  remove(name: string): void {
    return cookies.remove(name);
  }
}

export default new CookiesService();
