import {css} from '../../styled-system/css';

export interface TierListGroup {
    tier: string;
    items: string[];
}

interface TierListProps {
    groups: TierListGroup[];
    emptyText?: string;
}

export const TierList = ({groups, emptyText = 'No entries yet.'}: TierListProps) => (
    <div
        className={css({
            mt: '10',
            display: 'grid',
            gap: '6',
        })}
    >
        {groups.map(group => {
            const itemCountByName = new Map<string, number>();
            return (
                <section
                    key={group.tier}
                    className={css({
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'gray.200',
                        rounded: 'lg',
                        p: '4',
                        display: 'grid',
                        gap: '4',
                        _dark: {
                            borderColor: 'gray.700',
                        },
                    })}
                >
                    <div
                        className={css({
                            fontSize: 'sm',
                            fontWeight: 'bold',
                            color: 'gray.500',
                            _dark: {color: 'gray.400'},
                        })}
                    >
                        {group.tier}
                    </div>
                    <div
                        className={css({
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                            gap: '3',
                        })}
                    >
                        {group.items.length > 0 ? (
                            group.items.map(item => {
                                const seenCount = (itemCountByName.get(item) ?? 0) + 1;
                                itemCountByName.set(item, seenCount);
                                return (
                                    <div
                                        key={`${group.tier}-${item}-${seenCount}`}
                                        className={css({
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: 'gray.200',
                                            rounded: 'md',
                                            px: '3',
                                            py: '2',
                                            minH: '12',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            fontSize: 'sm',
                                            lineHeight: 'short',
                                            wordBreak: 'break-word',
                                            _dark: {
                                                borderColor: 'gray.700',
                                            },
                                        })}
                                    >
                                        {item}
                                    </div>
                                );
                            })
                        ) : (
                            <div
                                className={css({
                                    fontSize: 'sm',
                                    color: 'gray.500',
                                    _dark: {color: 'gray.400'},
                                })}
                            >
                                {emptyText}
                            </div>
                        )}
                    </div>
                </section>
            );
        })}
    </div>
);
