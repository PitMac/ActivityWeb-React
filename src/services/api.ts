export interface Activity {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

export const getActivity = async (
  type: string,
  participants: string
): Promise<Activity> => {
  try {
    const response = await fetch(
      `https://www.boredapi.com/api/activity?type=${type}&participants=${participants}`
    );
    const resp = await response.json();
    return resp;
  } catch (error) {
    return {} as Activity;
  }
};
