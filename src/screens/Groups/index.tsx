import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
      />

      <GroupCard 
        title="Galera do Ignite" />
    </Container>
  );
}