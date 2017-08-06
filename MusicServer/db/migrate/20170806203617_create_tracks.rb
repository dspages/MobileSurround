class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :key
      t.string :title
      t.timestamps
    end
    add_column :tracks, :channel1, :binary, :limit => 10.megabyte
    add_column :tracks, :channel2, :binary, :limit => 10.megabyte
    add_column :tracks, :channel3, :binary, :limit => 10.megabyte
    add_column :tracks, :channel4, :binary, :limit => 10.megabyte
    add_column :tracks, :channel5, :binary, :limit => 10.megabyte
    add_index :tracks, :key
  end
end
