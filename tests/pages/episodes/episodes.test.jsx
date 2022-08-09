import { getStaticProps } from "../../../pages/episodes/[id]";

describe("getStaticProps", () => {
  describe("Cuando invocamos la api de getEpisode", () => {
    test("Devuelve un objeto con id, episode y el revalidate status", async () => {
      const result = await getStaticProps({params: {id: '1'}})
      console.log(result);
      expect(result.revalidate).toBe(60);
      expect(result.props.id).toBe("1");
      expect(result.props.episode).toEqual({"id": 1, "name": "Episode Test"});
    });
  });
});