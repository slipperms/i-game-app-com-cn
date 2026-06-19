// content-map.js
// Site content map for https://i-game-app.com.cn
// Keywords: 爱游戏, gaming categories and tags

const contentMap = {
  siteUrl: "https://i-game-app.com.cn",
  keywords: ["爱游戏", "mobile games", "casual games", "puzzle", "strategy"],
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["爱游戏", "featured", "new releases"],
      items: [
        { name: "每日推荐", slug: "daily-picks", tag: "爱游戏" },
        { name: "热门排行", slug: "top-rated", tag: "爱游戏" }
      ]
    },
    {
      id: "news",
      title: "游戏资讯",
      tags: ["爱游戏", "news", "updates"],
      items: [
        { name: "新游发布", slug: "new-games", tag: "爱游戏" },
        { name: "活动公告", slug: "events", tag: "爱游戏" }
      ]
    },
    {
      id: "guides",
      title: "攻略专区",
      tags: ["爱游戏", "guides", "tips"],
      items: [
        { name: "新手教程", slug: "beginner", tag: "爱游戏" },
        { name: "高级技巧", slug: "advanced", tag: "爱游戏" }
      ]
    }
  ]
};

function searchContent(query) {
  if (!query || typeof query !== "string") return [];
  const lowerQuery = query.toLowerCase();
  const results = [];

  for (const section of contentMap.sections) {
    for (const item of section.items) {
      if (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.slug.toLowerCase().includes(lowerQuery) ||
        item.tag.toLowerCase().includes(lowerQuery) ||
        section.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      ) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          itemName: item.name,
          itemSlug: item.slug,
          itemTag: item.tag
        });
      }
    }
  }

  return results;
}

function filterByTag(tag) {
  if (!tag || typeof tag !== "string") return [];
  const lowerTag = tag.toLowerCase();
  const results = [];

  for (const section of contentMap.sections) {
    for (const item of section.items) {
      if (
        item.tag.toLowerCase() === lowerTag ||
        section.tags.some(t => t.toLowerCase() === lowerTag)
      ) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          itemName: item.name,
          itemSlug: item.slug
        });
      }
    }
  }

  return results;
}

function getSiteInfo() {
  return {
    url: contentMap.siteUrl,
    mainKeyword: "爱游戏",
    totalSections: contentMap.sections.length,
    sectionNames: contentMap.sections.map(s => s.title)
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { contentMap, searchContent, filterByTag, getSiteInfo };
}