import {TierList} from '@/components/tier-list';
import {TIER_ORDER, WRITER_TIERS} from './data';

const writerTierGroups = TIER_ORDER.map(tier => ({
    tier,
    items: WRITER_TIERS[tier],
}));

const WriterTierListPage = () => {
    return (
        <TierList groups={writerTierGroups} emptyText="No writers yet." />
    );
};

export default WriterTierListPage;
