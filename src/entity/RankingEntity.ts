export interface RankingItem {
    rank: number;
    nickname: string;
    rankingScore: number;
    level: number;
}

export interface RankingData {
    links: [];
    content: RankingItem[];
}
